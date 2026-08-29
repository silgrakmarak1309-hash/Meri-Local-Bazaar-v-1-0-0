package com.example.ui.screens

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.*
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.platform.testTag
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.example.constants.AppConstants
import com.example.ui.components.FooterSection
import com.example.ui.theme.*
import com.example.util.IntentUtils

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun PrivacyPolicyScreen(
    onBack: () -> Unit,
    onNavigate: (String) -> Unit,
    onDownloadClick: () -> Unit
) {
    val scrollState = rememberScrollState()
    val context = LocalContext.current

    Scaffold(
        topBar = {
            TopAppBar(
                title = {
                    Text(
                        "Privacy Policy",
                        fontWeight = FontWeight.Bold,
                        style = MaterialTheme.typography.titleLarge
                    )
                },
                navigationIcon = {
                    IconButton(onClick = onBack, modifier = Modifier.testTag("privacy_back_btn")) {
                        Icon(Icons.Default.ArrowBack, contentDescription = "Back")
                    }
                },
                colors = TopAppBarDefaults.topAppBarColors(
                    containerColor = MaterialTheme.colorScheme.surface,
                    titleContentColor = MaterialTheme.colorScheme.onSurface
                )
            )
        }
    ) { paddingValues ->
        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(paddingValues)
                .background(BackgroundLight)
                .verticalScroll(scrollState)
        ) {
            Column(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(20.dp)
            ) {
                // Header card
                Card(
                    modifier = Modifier.fillMaxWidth(),
                    shape = RoundedCornerShape(16.dp),
                    colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.surface),
                    elevation = CardDefaults.cardElevation(2.dp)
                ) {
                    Column(modifier = Modifier.padding(20.dp)) {
                        Text(
                            text = "Meri Local Bazaar Privacy Policy",
                            style = MaterialTheme.typography.headlineSmall,
                            fontWeight = FontWeight.Bold,
                            color = OrangePrimaryDark
                        )
                        Spacer(modifier = Modifier.height(4.dp))
                        Text(
                            text = "Last Updated: 2026 • Effective Immediately",
                            style = MaterialTheme.typography.bodySmall,
                            color = SlateLight
                        )
                        Spacer(modifier = Modifier.height(10.dp))
                        Text(
                            text = "At Meri Local Bazaar (\"we\", \"our\", \"platform\"), we respect your privacy and are committed to protecting the personal data of our marketplace community. This policy explains how information is collected, used, stored, and protected when you download and interact with our application.",
                            style = MaterialTheme.typography.bodyMedium,
                            color = SlateMedium,
                            lineHeight = 22.sp
                        )
                    }
                }

                Spacer(modifier = Modifier.height(16.dp))

                PolicySectionCard(
                    title = "1. Information Collected",
                    content = "We only collect data necessary to enable neighborhood marketplace listings, local service requests, taxi discovery, and direct communications between buyers and sellers."
                )

                PolicySectionCard(
                    title = "2. Account Information",
                    content = "When you register or sign in, we collect basic profile details including your name, verified mobile phone number, email address, and optional profile pictures to establish your verified seller/buyer profile."
                )

                PolicySectionCard(
                    title = "3. Contact Information",
                    content = "Your phone number or WhatsApp handle may be used to enable direct buyer-seller negotiations upon your consent. We never sell or distribute your contact details to third-party telemarketers or advertisers."
                )

                PolicySectionCard(
                    title = "4. User Uploaded Content",
                    content = "Users may upload product photos, descriptions, pricing, vehicle specifications, or service listings. All uploaded content must comply with community guidelines and is publicly visible to nearby buyers."
                )

                PolicySectionCard(
                    title = "5. Location Information Provided by Users",
                    content = "To present relevant local items, cabs, and services in your sector or locality, Meri Local Bazaar utilizes approximate location data provided by your device or selected by you manually."
                )

                PolicySectionCard(
                    title = "6. How Information Is Used",
                    content = "• To connect nearby buyers and sellers directly.\n• To facilitate local service and cab booking discoveries.\n• To ensure platform security and prevent spam or fraudulent listings.\n• To provide responsive customer support."
                )

                PolicySectionCard(
                    title = "7. Firebase and Third-Party Services",
                    content = "Our backend uses secure Google Firebase services (Firebase Authentication, Firestore Database, and App Check) and verified payment/communication utilities that adhere to strict international privacy standards."
                )

                PolicySectionCard(
                    title = "8. Data Storage & Security",
                    content = "Your data is transmitted using modern SSL/TLS encryption and stored in secure cloud infrastructure with access controls and automated threat detection."
                )

                PolicySectionCard(
                    title = "9. User Rights",
                    content = "You have the right to access, update, modify, or download your profile and active listings at any time directly through the application settings."
                )

                PolicySectionCard(
                    title = "10. Data Deletion Requests",
                    content = "You may request full account and listing data deletion at any time by contacting our support team at ${AppConstants.SUPPORT_EMAIL}. All related records will be purged within 30 days."
                )

                PolicySectionCard(
                    title = "11. Changes to This Policy",
                    content = "We may update this Privacy Policy periodically to reflect enhancements or legal standards. Changes will be posted directly to this portal."
                )

                PolicySectionCard(
                    title = "12. Contact Information",
                    content = "For privacy queries or data deletion requests:\n• Support Email: ${AppConstants.SUPPORT_EMAIL}\n• WhatsApp Support: ${AppConstants.WHATSAPP_DISPLAY}"
                )

                Spacer(modifier = Modifier.height(20.dp))

                // Quick Support Action
                Button(
                    onClick = {
                        IntentUtils.openEmail(
                            context = context,
                            email = AppConstants.SUPPORT_EMAIL,
                            subject = "Privacy & Data Request"
                        )
                    },
                    modifier = Modifier.fillMaxWidth(),
                    shape = RoundedCornerShape(14.dp),
                    colors = ButtonDefaults.buttonColors(containerColor = OrangePrimary)
                ) {
                    Icon(Icons.Default.Email, contentDescription = null)
                    Spacer(modifier = Modifier.width(8.dp))
                    Text("Contact Privacy Officer")
                }
            }

            FooterSection(
                onNavClick = onNavigate,
                onDownloadClick = onDownloadClick
            )
        }
    }
}

@Composable
private fun PolicySectionCard(title: String, content: String) {
    Card(
        modifier = Modifier
            .fillMaxWidth()
            .padding(vertical = 6.dp),
        shape = RoundedCornerShape(14.dp),
        colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.surface),
        elevation = CardDefaults.cardElevation(1.dp)
    ) {
        Column(modifier = Modifier.padding(16.dp)) {
            Text(
                text = title,
                style = MaterialTheme.typography.titleMedium,
                fontWeight = FontWeight.Bold,
                color = SlateDark
            )
            Spacer(modifier = Modifier.height(6.dp))
            Text(
                text = content,
                style = MaterialTheme.typography.bodyMedium,
                color = SlateMedium,
                lineHeight = 20.sp
            )
        }
    }
}
