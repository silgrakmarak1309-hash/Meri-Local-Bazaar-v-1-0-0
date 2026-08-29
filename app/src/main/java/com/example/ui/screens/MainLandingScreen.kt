package com.example.ui.screens

import android.content.Context
import androidx.compose.animation.AnimatedVisibility
import androidx.compose.animation.fadeIn
import androidx.compose.animation.fadeOut
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.rememberLazyListState
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Download
import androidx.compose.material.icons.filled.KeyboardArrowUp
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.shadow
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.platform.testTag
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import com.example.constants.AppConstants
import com.example.ui.components.*
import com.example.ui.theme.*
import com.example.util.IntentUtils
import kotlinx.coroutines.launch

@Composable
fun MainLandingScreen(
    onNavigateToPrivacy: () -> Unit,
    onNavigateToTerms: () -> Unit
) {
    val listState = rememberLazyListState()
    val coroutineScope = rememberCoroutineScope()
    val context = LocalContext.current

    var isDownloadDialogOpen by remember { mutableStateOf(false) }

    fun triggerApkDownload() {
        IntentUtils.openUrl(context, AppConstants.APK_DOWNLOAD_URL)
        isDownloadDialogOpen = true
    }

    fun scrollToSection(section: String) {
        coroutineScope.launch {
            when (section) {
                "home" -> listState.animateScrollToItem(0)
                "features" -> listState.animateScrollToItem(2)
                "screenshots" -> listState.animateScrollToItem(3)
                "how_to_download" -> listState.animateScrollToItem(4)
                "support" -> listState.animateScrollToItem(6)
                "privacy" -> onNavigateToPrivacy()
                "terms" -> onNavigateToTerms()
            }
        }
    }

    Box(
        modifier = Modifier
            .fillMaxSize()
            .background(BackgroundLight)
            .statusBarsPadding()
            .navigationBarsPadding()
    ) {
        Column(modifier = Modifier.fillMaxSize()) {
            // Header
            HeaderSection(
                onNavClick = { target ->
                    if (target == "privacy") onNavigateToPrivacy()
                    else if (target == "terms") onNavigateToTerms()
                    else scrollToSection(target)
                },
                onDownloadClick = { triggerApkDownload() }
            )

            // Scrollable Content
            LazyColumn(
                state = listState,
                modifier = Modifier
                    .fillMaxSize()
                    .testTag("main_scrollable_list")
            ) {
                // 0: Hero Section
                item {
                    HeroSection(
                        onDownloadClick = { triggerApkDownload() }
                    )
                }

                // 1: Android Safety Notice (Prominent below Hero)
                item {
                    SafetyNoticeSection()
                }

                // 2: Features Section
                item {
                    FeaturesSection()
                }

                // 3: App Screenshots Gallery Section
                item {
                    AppScreenshotsSection()
                }

                // 4: How To Download (6 steps)
                item {
                    HowToDownloadSection(
                        onDownloadClick = { triggerApkDownload() }
                    )
                }

                // 5: Safety Card reminder
                item {
                    SafetyNoticeSection()
                }

                // 6: Support Section (Only Email and WhatsApp)
                item {
                    SupportSection()
                }

                // 7: Footer
                item {
                    FooterSection(
                        onNavClick = { target ->
                            if (target == "privacy") onNavigateToPrivacy()
                            else if (target == "terms") onNavigateToTerms()
                            else scrollToSection(target)
                        },
                        onDownloadClick = { triggerApkDownload() }
                    )
                }
            }
        }

        // Floating Quick Download Button (shows when scrolled down)
        val showScrollToTop by remember {
            derivedStateOf { listState.firstVisibleItemIndex > 1 }
        }

        AnimatedVisibility(
            visible = showScrollToTop,
            enter = fadeIn(),
            exit = fadeOut(),
            modifier = Modifier
                .align(Alignment.BottomEnd)
                .padding(bottom = 24.dp, end = 20.dp)
        ) {
            FloatingActionButton(
                onClick = { triggerApkDownload() },
                containerColor = OrangePrimary,
                contentColor = Color.White,
                shape = RoundedCornerShape(18.dp),
                modifier = Modifier
                    .shadow(8.dp, RoundedCornerShape(18.dp))
                    .testTag("floating_download_fab")
            ) {
                Row(
                    modifier = Modifier.padding(horizontal = 16.dp),
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    Icon(Icons.Default.Download, contentDescription = "Download APK")
                    Spacer(modifier = Modifier.width(6.dp))
                    Text("Download APK", fontWeight = FontWeight.Bold)
                }
            }
        }

        // Interactive Download Modal with safe install instructions & progress
        DownloadModalDialog(
            isOpen = isDownloadDialogOpen,
            onDismiss = { isDownloadDialogOpen = false },
            onViewStepsClicked = {
                scrollToSection("how_to_download")
            }
        )
    }
}
