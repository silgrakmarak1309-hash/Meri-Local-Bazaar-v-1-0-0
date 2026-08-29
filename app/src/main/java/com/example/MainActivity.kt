package com.example

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.BackHandler
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.animation.AnimatedContent
import androidx.compose.animation.fadeIn
import androidx.compose.animation.fadeOut
import androidx.compose.animation.togetherWith
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material3.Surface
import androidx.compose.runtime.*
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalContext
import com.example.constants.AppConstants
import com.example.ui.screens.MainLandingScreen
import com.example.ui.screens.PrivacyPolicyScreen
import com.example.ui.screens.TermsConditionsScreen
import com.example.ui.theme.MyApplicationTheme
import com.example.util.IntentUtils

enum class AppScreen {
  LANDING,
  PRIVACY_POLICY,
  TERMS_CONDITIONS
}

class MainActivity : ComponentActivity() {
  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    enableEdgeToEdge()
    setContent {
      MyApplicationTheme {
        var currentScreen by remember { mutableStateOf(AppScreen.LANDING) }
        val context = LocalContext.current

        fun triggerDownload() {
          IntentUtils.openUrl(context, AppConstants.APK_DOWNLOAD_URL)
        }

        // Handle system back button press when on Privacy/Terms screens
        BackHandler(enabled = currentScreen != AppScreen.LANDING) {
          currentScreen = AppScreen.LANDING
        }

        Surface(modifier = Modifier.fillMaxSize()) {
          AnimatedContent(
            targetState = currentScreen,
            transitionSpec = { fadeIn() togetherWith fadeOut() },
            label = "screen_transition"
          ) { screen ->
            when (screen) {
              AppScreen.LANDING -> {
                MainLandingScreen(
                  onNavigateToPrivacy = { currentScreen = AppScreen.PRIVACY_POLICY },
                  onNavigateToTerms = { currentScreen = AppScreen.TERMS_CONDITIONS }
                )
              }
              AppScreen.PRIVACY_POLICY -> {
                PrivacyPolicyScreen(
                  onBack = { currentScreen = AppScreen.LANDING },
                  onNavigate = { destination ->
                    when (destination) {
                      "home" -> currentScreen = AppScreen.LANDING
                      "terms" -> currentScreen = AppScreen.TERMS_CONDITIONS
                      "privacy" -> currentScreen = AppScreen.PRIVACY_POLICY
                      else -> currentScreen = AppScreen.LANDING
                    }
                  },
                  onDownloadClick = { triggerDownload() }
                )
              }
              AppScreen.TERMS_CONDITIONS -> {
                TermsConditionsScreen(
                  onBack = { currentScreen = AppScreen.LANDING },
                  onNavigate = { destination ->
                    when (destination) {
                      "home" -> currentScreen = AppScreen.LANDING
                      "privacy" -> currentScreen = AppScreen.PRIVACY_POLICY
                      "terms" -> currentScreen = AppScreen.TERMS_CONDITIONS
                      else -> currentScreen = AppScreen.LANDING
                    }
                  },
                  onDownloadClick = { triggerDownload() }
                )
              }
            }
          }
        }
      }
    }
  }
}

