package com.example.ui.components

import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Storefront
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.testTag
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.example.constants.AppConstants
import com.example.ui.theme.*

@Composable
fun FooterSection(
    onNavClick: (String) -> Unit,
    onDownloadClick: () -> Unit,
    modifier: Modifier = Modifier
) {
    Column(
        modifier = modifier
            .fillMaxWidth()
            .background(SlateDark)
            .padding(horizontal = 24.dp, vertical = 32.dp)
            .testTag("footer_section"),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        // Logo & Title
        Row(
            verticalAlignment = Alignment.CenterVertically,
            modifier = Modifier.clickable { onNavClick("home") }
        ) {
            Box(
                modifier = Modifier
                    .size(36.dp)
                    .clip(RoundedCornerShape(10.dp))
                    .background(OrangePrimary),
                contentAlignment = Alignment.Center
            ) {
                Icon(
                    imageVector = Icons.Default.Storefront,
                    contentDescription = null,
                    tint = Color.White,
                    modifier = Modifier.size(20.dp)
                )
            }
            Spacer(modifier = Modifier.width(10.dp))
            Text(
                text = AppConstants.APP_NAME,
                style = MaterialTheme.typography.titleLarge,
                fontWeight = FontWeight.Bold,
                color = Color.White
            )
        }

        Spacer(modifier = Modifier.height(6.dp))

        Text(
            text = AppConstants.TAGLINE,
            style = MaterialTheme.typography.bodyMedium,
            color = SlateLight,
            textAlign = TextAlign.Center
        )

        Spacer(modifier = Modifier.height(24.dp))

        Divider(color = Color(0xFF334155), thickness = 1.dp)

        Spacer(modifier = Modifier.height(20.dp))

        // Navigation Links
        Row(
            modifier = Modifier.fillMaxWidth(),
            horizontalArrangement = Arrangement.SpaceEvenly
        ) {
            FooterLink("Home") { onNavClick("home") }
            FooterLink("Download APK") { onDownloadClick() }
            FooterLink("Support") { onNavClick("support") }
        }

        Spacer(modifier = Modifier.height(14.dp))

        Row(
            modifier = Modifier.fillMaxWidth(),
            horizontalArrangement = Arrangement.Center
        ) {
            FooterLink("Privacy Policy") { onNavClick("privacy") }
            Spacer(modifier = Modifier.width(24.dp))
            FooterLink("Terms & Conditions") { onNavClick("terms") }
        }

        Spacer(modifier = Modifier.height(28.dp))

        Text(
            text = "© 2026 Meri Local Bazaar. All rights reserved.",
            style = MaterialTheme.typography.bodySmall,
            color = SlateLight,
            textAlign = TextAlign.Center
        )
    }
}

@Composable
private fun FooterLink(text: String, onClick: () -> Unit) {
    Text(
        text = text,
        style = MaterialTheme.typography.bodyMedium,
        fontWeight = FontWeight.Medium,
        color = Color(0xFFE2E8F0),
        modifier = Modifier
            .clickable { onClick() }
            .padding(vertical = 4.dp, horizontal = 6.dp)
    )
}
