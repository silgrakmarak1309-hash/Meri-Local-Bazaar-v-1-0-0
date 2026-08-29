package com.example.ui.screens

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.ArrowBack
import androidx.compose.material.icons.filled.Email
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
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
fun TermsConditionsScreen(
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
                        "Terms & Conditions",
                        fontWeight = FontWeight.Bold,
                        style = MaterialTheme.typography.titleLarge
                    )
                },
                navigationIcon = {
                    IconButton(onClick = onBack, modifier = Modifier.testTag("terms_back_btn")) {
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
                Card(
                    modifier = Modifier.fillMaxWidth(),
                    shape = RoundedCornerShape(16.dp),
                    colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.surface),
                    elevation = CardDefaults.cardElevation(2.dp)
                ) {
                    Column(modifier = Modifier.padding(20.dp)) {
                        Text(
                            text = "Meri Local Bazaar Terms of Service",
                            style = MaterialTheme.typography.headlineSmall,
                            fontWeight = FontWeight.Bold,
                            color = OrangePrimaryDark
                        )
                        Spacer(modifier = Modifier.height(4.dp))
                        Text(
                            text = "Last Updated: 2026 • Apne Area Ka Digital Marketplace",
                            style = MaterialTheme.typography.bodySmall,
                            color = SlateLight
                        )
                        Spacer(modifier = Modifier.height(10.dp))
                        Text(
                            text = "Please read these Terms & Conditions carefully before downloading, installing, or accessing the Meri Local Bazaar Android application. By downloading the APK or using our services, you agree to be bound by these terms.",
                            style = MaterialTheme.typography.bodyMedium,
                            color = SlateMedium,
                            lineHeight = 22.sp
                        )
                    }
                }

                Spacer(modifier = Modifier.height(16.dp))

                TermsSectionCard(
                    title = "1. Acceptance of Terms",
                    content = "By downloading the official APK from this portal and creating an account, you affirm that you are at least 18 years of age and agree to comply with all applicable local and national laws."
                )

                TermsSectionCard(
                    title = "2. Platform Purpose",
                    content = "Meri Local Bazaar provides a digital discovery and communication medium for neighborhood classifieds, local services, cabs, and peer-to-peer commerce. Meri Local Bazaar is a facilitator and does not take possession of physical items."
                )

                TermsSectionCard(
                    title = "3. User Responsibilities",
                    content = "Users are solely responsible for verifying the authenticity, physical condition, and pricing of items or credentials of service providers before conducting transactions or payments."
                )

                TermsSectionCard(
                    title = "4. User Generated Content",
                    content = "You retain ownership of the photos, text descriptions, and listing data you submit. You grant Meri Local Bazaar a license to host, display, and promote your listings across the local community."
                )

                TermsSectionCard(
                    title = "5. Prohibited Activities",
                    content = "Strictly forbidden activities include posting illegal items, weapons, counterfeit goods, fraudulent advertisements, harassment, hate speech, or spamming community members."
                )

                TermsSectionCard(
                    title = "6. Marketplace Safety",
                    content = "Always meet in public locations for in-person item inspections and transactions. Never send advance payments to unverified parties without verifying the item or service first."
                )

                TermsSectionCard(
                    title = "7. Third-Party Services",
                    content = "Our application may link to third-party tools such as WhatsApp, Google Maps, or cloud databases. Use of such third-party services is governed by their respective terms."
                )

                TermsSectionCard(
                    title = "8. APK Download and Installation",
                    content = "Users must only download the official APK provided via our verified release link. Meri Local Bazaar is not responsible for modified or unauthorized APK files obtained from third-party sites."
                )

                TermsSectionCard(
                    title = "9. Limitation of Liability",
                    content = "Meri Local Bazaar shall not be liable for any direct, indirect, incidental, or consequential damages resulting from transactions conducted between independent users."
                )

                TermsSectionCard(
                    title = "10. Account Suspension",
                    content = "We reserve the right to suspend or permanently ban accounts and delete listings that violate community safety rules or attempt fraudulent practices."
                )

                TermsSectionCard(
                    title = "11. Changes to Terms",
                    content = "We reserve the right to update these terms at any time. Continued use of the platform constitutes acceptance of updated terms."
                )

                TermsSectionCard(
                    title = "12. Contact Information",
                    content = "For support or legal inquiries:\n• Email: ${AppConstants.SUPPORT_EMAIL}\n• WhatsApp: ${AppConstants.WHATSAPP_DISPLAY}"
                )

                Spacer(modifier = Modifier.height(20.dp))

                Button(
                    onClick = {
                        IntentUtils.openEmail(
                            context = context,
                            email = AppConstants.SUPPORT_EMAIL,
                            subject = "Terms & Legal Inquiry"
                        )
                    },
                    modifier = Modifier.fillMaxWidth(),
                    shape = RoundedCornerShape(14.dp),
                    colors = ButtonDefaults.buttonColors(containerColor = OrangePrimary)
                ) {
                    Icon(Icons.Default.Email, contentDescription = null)
                    Spacer(modifier = Modifier.width(8.dp))
                    Text("Contact Legal & Support")
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
private fun TermsSectionCard(title: String, content: String) {
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
