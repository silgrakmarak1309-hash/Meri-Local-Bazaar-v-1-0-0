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
import androidx.compose.ui.draw.shadow
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.example.ui.theme.*

@Composable
fun MockupPhoneView(
    modifier: Modifier = Modifier,
    screenType: MockupScreenType = MockupScreenType.HOME_FEED,
    width: Dp = 270.dp,
    height: Dp = 480.dp
) {
    Box(
        modifier = modifier
            .width(width)
            .height(height)
            .shadow(24.dp, RoundedCornerShape(36.dp), spotColor = OrangePrimary.copy(alpha = 0.25f))
            .clip(RoundedCornerShape(36.dp))
            .background(Color(0xFF0F172A)) // Phone outer bezel
            .padding(8.dp)
            .border(2.dp, Color(0xFF334155), RoundedCornerShape(28.dp))
    ) {
        // Inner Screen Canvas
        Column(
            modifier = Modifier
                .fillMaxSize()
                .clip(RoundedCornerShape(26.dp))
                .background(Color(0xFFF8FAFC))
        ) {
            // Phone Notch & Status bar
            Row(
                modifier = Modifier
                    .fillMaxWidth()
                    .height(28.dp)
                    .background(Color.White)
                    .padding(horizontal = 14.dp),
                horizontalArrangement = Arrangement.SpaceBetween,
                verticalAlignment = Alignment.CenterVertically
            ) {
                Text(
                    text = "9:41",
                    style = MaterialTheme.typography.labelSmall,
                    fontWeight = FontWeight.Bold,
                    color = SlateDark
                )
                // Camera pill
                Box(
                    modifier = Modifier
                        .size(width = 60.dp, height = 14.dp)
                        .clip(RoundedCornerShape(8.dp))
                        .background(Color(0xFF0F172A))
                )
                Row(
                    horizontalArrangement = Arrangement.spacedBy(4.dp),
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    Icon(Icons.Default.Wifi, contentDescription = null, modifier = Modifier.size(12.dp), tint = SlateDark)
                    Icon(Icons.Default.BatteryFull, contentDescription = null, modifier = Modifier.size(14.dp), tint = SlateDark)
                }
            }

            // Screen Content according to screenType
            when (screenType) {
                MockupScreenType.HOME_FEED -> HomeFeedScreenMockup()
                MockupScreenType.BUY_SELL -> BuySellScreenMockup()
                MockupScreenType.CAB_SERVICES -> CabServicesScreenMockup()
                MockupScreenType.CHAT_SELLER -> ChatSellerScreenMockup()
            }
        }
    }
}

enum class MockupScreenType {
    HOME_FEED,
    BUY_SELL,
    CAB_SERVICES,
    CHAT_SELLER
}

@Composable
private fun HomeFeedScreenMockup() {
    Column(
        modifier = Modifier
            .fillMaxSize()
            .background(Color(0xFFF8FAFC))
    ) {
        // Mini App Top Bar
        Row(
            modifier = Modifier
                .fillMaxWidth()
                .background(Color.White)
                .padding(horizontal = 12.dp, vertical = 8.dp),
            verticalAlignment = Alignment.CenterVertically,
            horizontalArrangement = Arrangement.SpaceBetween
        ) {
            Row(verticalAlignment = Alignment.CenterVertically) {
                Box(
                    modifier = Modifier
                        .size(28.dp)
                        .clip(CircleShape)
                        .background(OrangePrimary),
                    contentAlignment = Alignment.Center
                ) {
                    Icon(Icons.Default.Storefront, contentDescription = null, tint = Color.White, modifier = Modifier.size(16.dp))
                }
                Spacer(modifier = Modifier.width(6.dp))
                Column {
                    Text("Meri Local Bazaar", fontSize = 11.sp, fontWeight = FontWeight.Bold, color = SlateDark)
                    Row(verticalAlignment = Alignment.CenterVertically) {
                        Icon(Icons.Default.LocationOn, contentDescription = null, tint = OrangePrimary, modifier = Modifier.size(9.dp))
                        Text("Sector 18, Local Area", fontSize = 8.sp, color = SlateLight)
                    }
                }
            }
            Icon(Icons.Outlined.Notifications, contentDescription = null, tint = SlateMedium, modifier = Modifier.size(18.dp))
        }

        // Mini Search Bar
        Row(
            modifier = Modifier
                .fillMaxWidth()
                .padding(horizontal = 10.dp, vertical = 6.dp)
                .clip(RoundedCornerShape(10.dp))
                .background(Color.White)
                .border(1.dp, SlateBorder, RoundedCornerShape(10.dp))
                .padding(horizontal = 8.dp, vertical = 6.dp),
            verticalAlignment = Alignment.CenterVertically
        ) {
            Icon(Icons.Default.Search, contentDescription = null, tint = SlateLight, modifier = Modifier.size(14.dp))
            Spacer(modifier = Modifier.width(4.dp))
            Text("Search products, cabs, electricians...", fontSize = 9.sp, color = SlateLight, maxLines = 1)
        }

        // Categories Grid
        Row(
            modifier = Modifier
                .fillMaxWidth()
                .padding(horizontal = 10.dp, vertical = 4.dp),
            horizontalArrangement = Arrangement.SpaceBetween
        ) {
            MiniCategoryChip("Buy/Sell", Icons.Default.ShoppingBag, OrangePrimary, OrangeLight)
            MiniCategoryChip("Cabs", Icons.Default.LocalTaxi, Color(0xFF0284C7), Color(0xFFE0F2FE))
            MiniCategoryChip("Services", Icons.Default.Handyman, Color(0xFF16A34A), Color(0xFFDCFCE7))
            MiniCategoryChip("Jobs", Icons.Default.WorkOutline, Color(0xFF9333EA), Color(0xFFF3E8FF))
        }

        Spacer(modifier = Modifier.height(6.dp))

        // Featured Listing Card
        Card(
            modifier = Modifier
                .fillMaxWidth()
                .padding(horizontal = 10.dp),
            shape = RoundedCornerShape(12.dp),
            colors = CardDefaults.cardColors(containerColor = Color.White),
            elevation = CardDefaults.cardElevation(2.dp)
        ) {
            Column(modifier = Modifier.padding(8.dp)) {
                Box(
                    modifier = Modifier
                        .fillMaxWidth()
                        .height(72.dp)
                        .clip(RoundedCornerShape(8.dp))
                        .background(
                            Brush.linearGradient(
                                listOf(OrangeLight, Color(0xFFFFCC80))
                            )
                        ),
                    contentAlignment = Alignment.Center
                ) {
                    Column(horizontalAlignment = Alignment.CenterHorizontally) {
                        Icon(Icons.Default.Storefront, contentDescription = null, tint = OrangePrimary, modifier = Modifier.size(24.dp))
                        Text("Featured Local Offer", fontSize = 9.sp, fontWeight = FontWeight.Bold, color = OrangePrimaryDark)
                    }
                }
                Spacer(modifier = Modifier.height(4.dp))
                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.SpaceBetween,
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    Text("Royal Enfield 350 Classic", fontSize = 10.sp, fontWeight = FontWeight.Bold, color = SlateDark)
                    Text("₹1,45,000", fontSize = 10.sp, fontWeight = FontWeight.ExtraBold, color = OrangePrimary)
                }
                Text("Near Main Market • 0.8 km away", fontSize = 8.sp, color = SlateLight)
            }
        }

        Spacer(modifier = Modifier.height(6.dp))

        // Mini Services Card
        Card(
            modifier = Modifier
                .fillMaxWidth()
                .padding(horizontal = 10.dp),
            shape = RoundedCornerShape(12.dp),
            colors = CardDefaults.cardColors(containerColor = Color.White),
            elevation = CardDefaults.cardElevation(2.dp)
        ) {
            Row(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(8.dp),
                verticalAlignment = Alignment.CenterVertically
            ) {
                Box(
                    modifier = Modifier
                        .size(32.dp)
                        .clip(CircleShape)
                        .background(Color(0xFFDCFCE7)),
                    contentAlignment = Alignment.Center
                ) {
                    Icon(Icons.Default.ElectricalServices, contentDescription = null, tint = Color(0xFF16A34A), modifier = Modifier.size(16.dp))
                }
                Spacer(modifier = Modifier.width(8.dp))
                Column(modifier = Modifier.weight(1f)) {
                    Text("Sharma Electricals & Repair", fontSize = 9.sp, fontWeight = FontWeight.Bold, color = SlateDark)
                    Text("★ 4.9 (120+ reviews) • 15 mins away", fontSize = 8.sp, color = SlateLight)
                }
                Surface(
                    shape = RoundedCornerShape(6.dp),
                    color = WhatsAppGreen.copy(alpha = 0.15f)
                ) {
                    Text("Chat", fontSize = 8.sp, fontWeight = FontWeight.Bold, color = WhatsAppGreenDark, modifier = Modifier.padding(horizontal = 6.dp, vertical = 2.dp))
                }
            }
        }

        Spacer(modifier = Modifier.weight(1f))

        // Bottom Mini Navigation Bar
        Row(
            modifier = Modifier
                .fillMaxWidth()
                .background(Color.White)
                .border(width = 1.dp, color = SlateBorder)
                .padding(vertical = 6.dp),
            horizontalArrangement = Arrangement.SpaceAround,
            verticalAlignment = Alignment.CenterVertically
        ) {
            MiniNavItem("Home", Icons.Default.Home, true)
            MiniNavItem("Explore", Icons.Default.Explore, false)
            MiniNavCenterPost()
            MiniNavItem("Chats", Icons.Default.ChatBubbleOutline, false)
            MiniNavItem("Profile", Icons.Default.PersonOutline, false)
        }
    }
}

@Composable
private fun BuySellScreenMockup() {
    Column(
        modifier = Modifier
            .fillMaxSize()
            .background(Color(0xFFF8FAFC))
            .padding(10.dp)
    ) {
        Text("Local Marketplace", fontSize = 12.sp, fontWeight = FontWeight.Bold, color = SlateDark)
        Text("Active listings in your neighborhood", fontSize = 8.sp, color = SlateLight)

        Spacer(modifier = Modifier.height(8.dp))

        // Two Column Mock items
        Row(horizontalArrangement = Arrangement.spacedBy(8.dp)) {
            Card(
                modifier = Modifier.weight(1f),
                shape = RoundedCornerShape(10.dp),
                colors = CardDefaults.cardColors(containerColor = Color.White)
            ) {
                Column(modifier = Modifier.padding(6.dp)) {
                    Box(
                        modifier = Modifier
                            .fillMaxWidth()
                            .height(55.dp)
                            .clip(RoundedCornerShape(6.dp))
                            .background(Color(0xFFE2E8F0)),
                        contentAlignment = Alignment.Center
                    ) {
                        Icon(Icons.Default.PhoneAndroid, contentDescription = null, tint = SlateLight, modifier = Modifier.size(22.dp))
                    }
                    Spacer(modifier = Modifier.height(4.dp))
                    Text("iPhone 13 128GB", fontSize = 9.sp, fontWeight = FontWeight.Bold)
                    Text("₹38,500", fontSize = 9.sp, fontWeight = FontWeight.ExtraBold, color = OrangePrimary)
                    Text("0.4 km • Verified", fontSize = 7.sp, color = EmeraldSuccess)
                }
            }

            Card(
                modifier = Modifier.weight(1f),
                shape = RoundedCornerShape(10.dp),
                colors = CardDefaults.cardColors(containerColor = Color.White)
            ) {
                Column(modifier = Modifier.padding(6.dp)) {
                    Box(
                        modifier = Modifier
                            .fillMaxWidth()
                            .height(55.dp)
                            .clip(RoundedCornerShape(6.dp))
                            .background(Color(0xFFFEF3C7)),
                        contentAlignment = Alignment.Center
                    ) {
                        Icon(Icons.Default.Chair, contentDescription = null, tint = Color(0xFFD97706), modifier = Modifier.size(22.dp))
                    }
                    Spacer(modifier = Modifier.height(4.dp))
                    Text("Teak Wood Sofa 3-Seater", fontSize = 9.sp, fontWeight = FontWeight.Bold, maxLines = 1)
                    Text("₹9,200", fontSize = 9.sp, fontWeight = FontWeight.ExtraBold, color = OrangePrimary)
                    Text("1.2 km • Urgent Sale", fontSize = 7.sp, color = SlateLight)
                }
            }
        }

        Spacer(modifier = Modifier.height(8.dp))

        // Direct WhatsApp Contact Banner
        Surface(
            modifier = Modifier.fillMaxWidth(),
            shape = RoundedCornerShape(10.dp),
            color = WhatsAppBg,
            border = androidx.compose.foundation.BorderStroke(1.dp, WhatsAppGreen.copy(alpha = 0.3f))
        ) {
            Row(
                modifier = Modifier.padding(8.dp),
                verticalAlignment = Alignment.CenterVertically
            ) {
                Icon(Icons.Default.Chat, contentDescription = null, tint = WhatsAppGreenDark, modifier = Modifier.size(16.dp))
                Spacer(modifier = Modifier.width(6.dp))
                Column(modifier = Modifier.weight(1f)) {
                    Text("Instant WhatsApp Connect", fontSize = 8.sp, fontWeight = FontWeight.Bold, color = SlateDark)
                    Text("Direct buyer-seller messaging without middleman fees", fontSize = 7.sp, color = SlateMedium)
                }
            }
        }
    }
}

@Composable
private fun CabServicesScreenMockup() {
    Column(
        modifier = Modifier
            .fillMaxSize()
            .background(Color(0xFFF8FAFC))
            .padding(10.dp)
    ) {
        Text("Cab & Local Transport", fontSize = 12.sp, fontWeight = FontWeight.Bold, color = SlateDark)
        Text("Book local taxis, auto-rickshaws & cargo", fontSize = 8.sp, color = SlateLight)

        Spacer(modifier = Modifier.height(8.dp))

        Card(
            modifier = Modifier.fillMaxWidth(),
            shape = RoundedCornerShape(10.dp),
            colors = CardDefaults.cardColors(containerColor = Color.White)
        ) {
            Row(
                modifier = Modifier.padding(8.dp),
                verticalAlignment = Alignment.CenterVertically
            ) {
                Icon(Icons.Default.LocalTaxi, contentDescription = null, tint = OrangePrimary, modifier = Modifier.size(24.dp))
                Spacer(modifier = Modifier.width(8.dp))
                Column(modifier = Modifier.weight(1f)) {
                    Text("Local City Taxi / Auto", fontSize = 9.sp, fontWeight = FontWeight.Bold)
                    Text("Quick pickup in 5-10 mins", fontSize = 8.sp, color = SlateLight)
                }
                Text("From ₹50", fontSize = 9.sp, fontWeight = FontWeight.Bold, color = OrangePrimary)
            }
        }

        Spacer(modifier = Modifier.height(6.dp))

        Card(
            modifier = Modifier.fillMaxWidth(),
            shape = RoundedCornerShape(10.dp),
            colors = CardDefaults.cardColors(containerColor = Color.White)
        ) {
            Row(
                modifier = Modifier.padding(8.dp),
                verticalAlignment = Alignment.CenterVertically
            ) {
                Icon(Icons.Default.LocalShipping, contentDescription = null, tint = Color(0xFF2563EB), modifier = Modifier.size(24.dp))
                Spacer(modifier = Modifier.width(8.dp))
                Column(modifier = Modifier.weight(1f)) {
                    Text("Tempo & Mini Truck Delivery", fontSize = 9.sp, fontWeight = FontWeight.Bold)
                    Text("For goods shifting & local luggage", fontSize = 8.sp, color = SlateLight)
                }
                Text("Fixed Rate", fontSize = 8.sp, fontWeight = FontWeight.Bold, color = SlateMedium)
            }
        }
    }
}

@Composable
private fun ChatSellerScreenMockup() {
    Column(
        modifier = Modifier
            .fillMaxSize()
            .background(Color(0xFFF8FAFC))
            .padding(10.dp)
    ) {
        Row(verticalAlignment = Alignment.CenterVertically) {
            Box(
                modifier = Modifier
                    .size(26.dp)
                    .clip(CircleShape)
                    .background(Color(0xFFE2E8F0)),
                contentAlignment = Alignment.Center
            ) {
                Icon(Icons.Default.Person, contentDescription = null, tint = SlateDark, modifier = Modifier.size(16.dp))
            }
            Spacer(modifier = Modifier.width(6.dp))
            Column {
                Text("Rajesh Verma (Seller)", fontSize = 10.sp, fontWeight = FontWeight.Bold, color = SlateDark)
                Text("Online • Sector 14", fontSize = 7.sp, color = EmeraldSuccess)
            }
        }

        Spacer(modifier = Modifier.height(10.dp))

        // Chat bubbles
        Surface(
            shape = RoundedCornerShape(8.dp),
            color = Color(0xFFE2E8F0),
            modifier = Modifier.fillMaxWidth(0.75f)
        ) {
            Text("Hi, is the dining table set still available?", fontSize = 8.sp, modifier = Modifier.padding(6.dp), color = SlateDark)
        }

        Spacer(modifier = Modifier.height(6.dp))

        Surface(
            shape = RoundedCornerShape(8.dp),
            color = OrangePrimary,
            modifier = Modifier
                .fillMaxWidth(0.75f)
                .align(Alignment.End)
        ) {
            Text("Yes! It is in mint condition. You can visit anytime today.", fontSize = 8.sp, modifier = Modifier.padding(6.dp), color = Color.White)
        }
    }
}

@Composable
private fun MiniCategoryChip(label: String, icon: ImageVector, iconTint: Color, bg: Color) {
    Column(
        horizontalAlignment = Alignment.CenterHorizontally,
        modifier = Modifier.width(52.dp)
    ) {
        Box(
            modifier = Modifier
                .size(36.dp)
                .clip(RoundedCornerShape(10.dp))
                .background(bg),
            contentAlignment = Alignment.Center
        ) {
            Icon(icon, contentDescription = null, tint = iconTint, modifier = Modifier.size(18.dp))
        }
        Spacer(modifier = Modifier.height(2.dp))
        Text(label, fontSize = 8.sp, fontWeight = FontWeight.Medium, color = SlateDark, maxLines = 1, overflow = TextOverflow.Ellipsis)
    }
}

@Composable
private fun MiniNavItem(label: String, icon: ImageVector, active: Boolean) {
    Column(horizontalAlignment = Alignment.CenterHorizontally) {
        Icon(icon, contentDescription = null, tint = if (active) OrangePrimary else SlateLight, modifier = Modifier.size(14.dp))
        Text(label, fontSize = 7.sp, color = if (active) OrangePrimary else SlateLight, fontWeight = if (active) FontWeight.Bold else FontWeight.Normal)
    }
}

@Composable
private fun MiniNavCenterPost() {
    Box(
        modifier = Modifier
            .size(24.dp)
            .clip(CircleShape)
            .background(OrangePrimary),
        contentAlignment = Alignment.Center
    ) {
        Icon(Icons.Default.Add, contentDescription = null, tint = Color.White, modifier = Modifier.size(16.dp))
    }
}
