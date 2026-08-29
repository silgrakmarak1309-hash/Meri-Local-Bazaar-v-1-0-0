package com.example.ui.components

import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.*
import androidx.compose.material.icons.outlined.*
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.platform.testTag
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.example.ui.theme.*

data class StepInfo(
    val stepNumber: Int,
    val title: String,
    val description: String,
    val icon: ImageVector
)

@Composable
fun HowToDownloadSection(
    onDownloadClick: () -> Unit,
    modifier: Modifier = Modifier
) {
    val steps = listOf(
        StepInfo(
            stepNumber = 1,
            title = "STEP 1",
            description = "Click the Download APK button.",
            icon = Icons.Default.TouchApp
        ),
        StepInfo(
            stepNumber = 2,
            title = "STEP 2",
            description = "Wait for the APK file to download.",
            icon = Icons.Default.CloudDownload
        ),
        StepInfo(
            stepNumber = 3,
            title = "STEP 3",
            description = "Open the downloaded APK file.",
            icon = Icons.Default.FolderOpen
        ),
        StepInfo(
            stepNumber = 4,
            title = "STEP 4",
            description = "If Android asks, allow installation from this source.",
            icon = Icons.Outlined.Security
        ),
        StepInfo(
            stepNumber = 5,
            title = "STEP 5",
            description = "Click Install.",
            icon = Icons.Default.SettingsApplications
        ),
        StepInfo(
            stepNumber = 6,
            title = "STEP 6",
            description = "Open Meri Local Bazaar and start exploring.",
            icon = Icons.Default.RocketLaunch
        )
    )

    Column(
        modifier = modifier
            .fillMaxWidth()
            .padding(horizontal = 20.dp, vertical = 24.dp)
            .testTag("how_to_download_section")
    ) {
        // Header
        Column(
            modifier = Modifier.fillMaxWidth(),
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            Surface(
                shape = RoundedCornerShape(20.dp),
                color = OrangeLight,
                modifier = Modifier.padding(bottom = 8.dp)
            ) {
                Text(
                    text = "EASY 6-STEP GUIDE",
                    style = MaterialTheme.typography.labelSmall,
                    fontWeight = FontWeight.Bold,
                    color = OrangePrimaryDark,
                    modifier = Modifier.padding(horizontal = 12.dp, vertical = 4.dp),
                    letterSpacing = 0.5.sp
                )
            }

            Text(
                text = "How to Download & Install",
                style = MaterialTheme.typography.headlineSmall,
                fontWeight = FontWeight.Bold,
                color = SlateDark,
                textAlign = TextAlign.Center
            )

            Spacer(modifier = Modifier.height(6.dp))

            Text(
                text = "Follow these simple steps to install the official APK safely on any Android device.",
                style = MaterialTheme.typography.bodyMedium,
                color = SlateLight,
                textAlign = TextAlign.Center,
                modifier = Modifier.padding(horizontal = 12.dp)
            )
        }

        Spacer(modifier = Modifier.height(24.dp))

        // 6 Steps Cards
        Column(verticalArrangement = Arrangement.spacedBy(12.dp)) {
            steps.forEach { step ->
                Card(
                    modifier = Modifier.fillMaxWidth(),
                    shape = RoundedCornerShape(16.dp),
                    colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.surface),
                    elevation = CardDefaults.cardElevation(defaultElevation = 2.dp)
                ) {
                    Row(
                        modifier = Modifier
                            .fillMaxWidth()
                            .padding(16.dp),
                        verticalAlignment = Alignment.CenterVertically
                    ) {
                        // Step number badge
                        Box(
                            modifier = Modifier
                                .size(44.dp)
                                .clip(CircleShape)
                                .background(OrangeLight),
                            contentAlignment = Alignment.Center
                        ) {
                            Text(
                                text = "${step.stepNumber}",
                                style = MaterialTheme.typography.titleMedium,
                                fontWeight = FontWeight.ExtraBold,
                                color = OrangePrimary
                            )
                        }

                        Spacer(modifier = Modifier.width(14.dp))

                        Column(modifier = Modifier.weight(1f)) {
                            Text(
                                text = step.title,
                                style = MaterialTheme.typography.labelSmall,
                                fontWeight = FontWeight.Bold,
                                color = OrangePrimaryDark,
                                letterSpacing = 1.sp
                            )
                            Spacer(modifier = Modifier.height(2.dp))
                            Text(
                                text = step.description,
                                style = MaterialTheme.typography.bodyLarge,
                                fontWeight = FontWeight.SemiBold,
                                color = SlateDark
                            )
                        }

                        Spacer(modifier = Modifier.width(10.dp))

                        Icon(
                            imageVector = step.icon,
                            contentDescription = step.title,
                            tint = SlateMedium,
                            modifier = Modifier.size(24.dp)
                        )
                    }
                }
            }
        }

        Spacer(modifier = Modifier.height(20.dp))

        // Quick button to start Step 1
        Button(
            onClick = onDownloadClick,
            shape = RoundedCornerShape(14.dp),
            colors = ButtonDefaults.buttonColors(containerColor = OrangePrimary),
            modifier = Modifier
                .fillMaxWidth()
                .height(52.dp)
        ) {
            Icon(Icons.Default.Download, contentDescription = null)
            Spacer(modifier = Modifier.width(8.dp))
            Text("Start Step 1 - Download APK Now", fontWeight = FontWeight.Bold)
        }
    }
}
