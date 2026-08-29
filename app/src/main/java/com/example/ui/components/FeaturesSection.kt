package com.example.ui.components

import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.*
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

data class FeatureItem(
    val title: String,
    val description: String,
    val icon: ImageVector,
    val iconTint: Color,
    val iconBg: Color
)

@Composable
fun FeaturesSection(modifier: Modifier = Modifier) {
    val features = listOf(
        FeatureItem(
            title = "🛍 Buy & Sell Locally",
            description = "Buy and sell products easily in your local area.",
            icon = Icons.Default.ShoppingBag,
            iconTint = OrangePrimary,
            iconBg = OrangeLight
        ),
        FeatureItem(
            title = "📍 Local Marketplace",
            description = "Discover products and services near you.",
            icon = Icons.Default.LocationOn,
            iconTint = Color(0xFF0284C7),
            iconBg = Color(0xFFE0F2FE)
        ),
        FeatureItem(
            title = "💬 Easy Contact",
            description = "Connect with sellers easily through chat and WhatsApp.",
            icon = Icons.Default.Chat,
            iconTint = WhatsAppGreenDark,
            iconBg = WhatsAppBg
        ),
        FeatureItem(
            title = "🚕 Cab & Taxi",
            description = "Find local cab, taxi and transport services.",
            icon = Icons.Default.LocalTaxi,
            iconTint = Color(0xFFD97706),
            iconBg = Color(0xFFFEF3C7)
        ),
        FeatureItem(
            title = "🛠 Local Services",
            description = "Find electricians, plumbers, repair services and more.",
            icon = Icons.Default.Handyman,
            iconTint = Color(0xFF16A34A),
            iconBg = Color(0xFFDCFCE7)
        ),
        FeatureItem(
            title = "⭐ Better Local Discovery",
            description = "Explore useful local listings in one place.",
            icon = Icons.Default.Star,
            iconTint = Color(0xFF9333EA),
            iconBg = Color(0xFFF3E8FF)
        )
    )

    Column(
        modifier = modifier
            .fillMaxWidth()
            .padding(horizontal = 20.dp, vertical = 24.dp)
            .testTag("features_section")
    ) {
        // Section Header
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
                    text = "POWERFUL CAPABILITIES",
                    style = MaterialTheme.typography.labelSmall,
                    fontWeight = FontWeight.Bold,
                    color = OrangePrimaryDark,
                    modifier = Modifier.padding(horizontal = 12.dp, vertical = 4.dp),
                    letterSpacing = 0.5.sp
                )
            }
            Text(
                text = "Everything You Need in One App",
                style = MaterialTheme.typography.headlineSmall,
                fontWeight = FontWeight.Bold,
                color = SlateDark,
                textAlign = TextAlign.Center
            )
            Spacer(modifier = Modifier.height(6.dp))
            Text(
                text = "Designed specifically to bridge neighborhood buyers, trusted sellers, and skilled service experts.",
                style = MaterialTheme.typography.bodyMedium,
                color = SlateLight,
                textAlign = TextAlign.Center,
                modifier = Modifier.padding(horizontal = 12.dp)
            )
        }

        Spacer(modifier = Modifier.height(20.dp))

        // Features Grid (cards)
        Column(verticalArrangement = Arrangement.spacedBy(14.dp)) {
            features.forEach { feature ->
                Card(
                    modifier = Modifier.fillMaxWidth(),
                    shape = RoundedCornerShape(18.dp),
                    colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.surface),
                    elevation = CardDefaults.cardElevation(defaultElevation = 2.dp)
                ) {
                    Row(
                        modifier = Modifier
                            .fillMaxWidth()
                            .padding(16.dp),
                        verticalAlignment = Alignment.CenterVertically
                    ) {
                        Box(
                            modifier = Modifier
                                .size(50.dp)
                                .clip(RoundedCornerShape(14.dp))
                                .background(feature.iconBg),
                            contentAlignment = Alignment.Center
                        ) {
                            Icon(
                                imageVector = feature.icon,
                                contentDescription = null,
                                tint = feature.iconTint,
                                modifier = Modifier.size(26.dp)
                            )
                        }

                        Spacer(modifier = Modifier.width(16.dp))

                        Column(modifier = Modifier.weight(1f)) {
                            Text(
                                text = feature.title,
                                style = MaterialTheme.typography.titleMedium,
                                fontWeight = FontWeight.Bold,
                                color = SlateDark
                            )
                            Spacer(modifier = Modifier.height(3.dp))
                            Text(
                                text = feature.description,
                                style = MaterialTheme.typography.bodyMedium,
                                color = SlateLight,
                                lineHeight = 19.sp
                            )
                        }
                    }
                }
            }
        }
    }
}
