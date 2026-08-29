package com.example.ui.components

import androidx.compose.animation.AnimatedVisibility
import androidx.compose.animation.expandVertically
import androidx.compose.animation.fadeIn
import androidx.compose.animation.fadeOut
import androidx.compose.animation.shrinkVertically
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.*
import androidx.compose.material.icons.outlined.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.draw.shadow
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.testTag
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.example.constants.AppConstants
import com.example.ui.theme.*

@Composable
fun HeaderSection(
    onNavClick: (String) -> Unit,
    onDownloadClick: () -> Unit
) {
    var isMobileMenuOpen by remember { mutableStateOf(false) }

    Column(
        modifier = Modifier
            .fillMaxWidth()
            .shadow(4.dp, spotColor = SlateDark.copy(alpha = 0.06f))
            .background(MaterialTheme.colorScheme.surface)
    ) {
        Row(
            modifier = Modifier
                .fillMaxWidth()
                .padding(horizontal = 16.dp, vertical = 12.dp),
            verticalAlignment = Alignment.CenterVertically,
            horizontalArrangement = Arrangement.SpaceBetween
        ) {
            // Brand Logo & Name
            Row(
                verticalAlignment = Alignment.CenterVertically,
                modifier = Modifier
                    .clickable { onNavClick("home") }
                    .testTag("brand_header_logo")
            ) {
                Box(
                    modifier = Modifier
                        .size(42.dp)
                        .clip(RoundedCornerShape(12.dp))
                        .background(
                            Brush.linearGradient(
                                listOf(OrangePrimary, OrangeGradientEnd)
                            )
                        ),
                    contentAlignment = Alignment.Center
                ) {
                    Icon(
                        imageVector = Icons.Default.Storefront,
                        contentDescription = "Meri Local Bazaar Logo",
                        tint = Color.White,
                        modifier = Modifier.size(24.dp)
                    )
                }
                Spacer(modifier = Modifier.width(10.dp))
                Column {
                    Text(
                        text = AppConstants.APP_NAME,
                        style = MaterialTheme.typography.titleMedium,
                        fontWeight = FontWeight.ExtraBold,
                        color = MaterialTheme.colorScheme.onSurface
                    )
                    Text(
                        text = AppConstants.TAGLINE,
                        style = MaterialTheme.typography.bodySmall,
                        color = SlateLight,
                        fontSize = 11.sp
                    )
                }
            }

            // Action: Hamburger menu toggle for mobile
            Row(verticalAlignment = Alignment.CenterVertically) {
                Button(
                    onClick = onDownloadClick,
                    shape = RoundedCornerShape(20.dp),
                    colors = ButtonDefaults.buttonColors(containerColor = OrangePrimary),
                    contentPadding = PaddingValues(horizontal = 12.dp, vertical = 6.dp),
                    modifier = Modifier
                        .height(36.dp)
                        .testTag("header_download_btn")
                ) {
                    Icon(Icons.Default.Download, contentDescription = null, modifier = Modifier.size(16.dp))
                    Spacer(modifier = Modifier.width(4.dp))
                    Text("Get APK", fontSize = 12.sp, fontWeight = FontWeight.Bold)
                }

                Spacer(modifier = Modifier.width(8.dp))

                IconButton(
                    onClick = { isMobileMenuOpen = !isMobileMenuOpen },
                    modifier = Modifier
                        .size(40.dp)
                        .clip(RoundedCornerShape(10.dp))
                        .background(MaterialTheme.colorScheme.surfaceVariant)
                        .testTag("hamburger_menu_button")
                ) {
                    Icon(
                        imageVector = if (isMobileMenuOpen) Icons.Default.Close else Icons.Default.Menu,
                        contentDescription = "Toggle Navigation Menu",
                        tint = MaterialTheme.colorScheme.onSurface
                    )
                }
            }
        }

        // Mobile dropdown / hamburger menu expandable content
        AnimatedVisibility(
            visible = isMobileMenuOpen,
            enter = expandVertically() + fadeIn(),
            exit = shrinkVertically() + fadeOut()
        ) {
            Column(
                modifier = Modifier
                    .fillMaxWidth()
                    .background(MaterialTheme.colorScheme.surface)
                    .border(width = 1.dp, color = SlateBorder)
                    .padding(horizontal = 20.dp, vertical = 14.dp),
                verticalArrangement = Arrangement.spacedBy(10.dp)
            ) {
                NavMenuItem("🏠 Home", "home") {
                    isMobileMenuOpen = false
                    onNavClick("home")
                }
                NavMenuItem("✨ Features", "features") {
                    isMobileMenuOpen = false
                    onNavClick("features")
                }
                NavMenuItem("📱 App Screenshots", "screenshots") {
                    isMobileMenuOpen = false
                    onNavClick("screenshots")
                }
                NavMenuItem("📥 How to Download", "how_to_download") {
                    isMobileMenuOpen = false
                    onNavClick("how_to_download")
                }
                NavMenuItem("💬 Support & Help", "support") {
                    isMobileMenuOpen = false
                    onNavClick("support")
                }
                NavMenuItem("🔒 Privacy Policy", "privacy") {
                    isMobileMenuOpen = false
                    onNavClick("privacy")
                }
                NavMenuItem("📜 Terms & Conditions", "terms") {
                    isMobileMenuOpen = false
                    onNavClick("terms")
                }
            }
        }
    }
}

@Composable
private fun NavMenuItem(
    label: String,
    tag: String,
    onClick: () -> Unit
) {
    Surface(
        onClick = onClick,
        shape = RoundedCornerShape(10.dp),
        color = Color.Transparent,
        modifier = Modifier
            .fillMaxWidth()
            .testTag("nav_item_$tag")
    ) {
        Row(
            modifier = Modifier
                .fillMaxWidth()
                .padding(vertical = 10.dp, horizontal = 12.dp),
            verticalAlignment = Alignment.CenterVertically,
            horizontalArrangement = Arrangement.SpaceBetween
        ) {
            Text(
                text = label,
                style = MaterialTheme.typography.bodyLarge,
                fontWeight = FontWeight.Medium,
                color = MaterialTheme.colorScheme.onSurface
            )
            Icon(
                imageVector = Icons.Default.ChevronRight,
                contentDescription = null,
                tint = SlateLight,
                modifier = Modifier.size(18.dp)
            )
        }
    }
}
