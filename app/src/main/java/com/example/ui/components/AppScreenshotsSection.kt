package com.example.ui.components

import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.pager.HorizontalPager
import androidx.compose.foundation.pager.rememberPagerState
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.testTag
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.example.ui.theme.*
import kotlinx.coroutines.launch

data class ScreenshotSlide(
    val title: String,
    val subtitle: String,
    val screenType: MockupScreenType
)

@Composable
fun AppScreenshotsSection(modifier: Modifier = Modifier) {
    val slides = listOf(
        ScreenshotSlide(
            title = "Live Neighborhood Feed",
            subtitle = "Browse freshly posted goods, electronics, and local offers.",
            screenType = MockupScreenType.HOME_FEED
        ),
        ScreenshotSlide(
            title = "Direct Buy & Sell",
            subtitle = "Clean marketplace listings with quick WhatsApp communication.",
            screenType = MockupScreenType.BUY_SELL
        ),
        ScreenshotSlide(
            title = "Cab, Taxi & Transport",
            subtitle = "Book nearby drivers and delivery tempos with zero hassle.",
            screenType = MockupScreenType.CAB_SERVICES
        ),
        ScreenshotSlide(
            title = "Instant Chat & Negotiation",
            subtitle = "Real-time direct chatting between buyers and verified sellers.",
            screenType = MockupScreenType.CHAT_SELLER
        )
    )

    val pagerState = rememberPagerState(pageCount = { slides.size })
    val coroutineScope = rememberCoroutineScope()

    Column(
        modifier = modifier
            .fillMaxWidth()
            .padding(vertical = 24.dp)
            .testTag("app_screenshots_section"),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        // Section Header
        Surface(
            shape = RoundedCornerShape(20.dp),
            color = OrangeLight,
            modifier = Modifier.padding(bottom = 8.dp)
        ) {
            Text(
                text = "APP EXPERIENCE",
                style = MaterialTheme.typography.labelSmall,
                fontWeight = FontWeight.Bold,
                color = OrangePrimaryDark,
                modifier = Modifier.padding(horizontal = 12.dp, vertical = 4.dp),
                letterSpacing = 0.5.sp
            )
        }

        Text(
            text = "Explore the App Interface",
            style = MaterialTheme.typography.headlineSmall,
            fontWeight = FontWeight.Bold,
            color = SlateDark,
            textAlign = TextAlign.Center
        )

        Spacer(modifier = Modifier.height(6.dp))

        Text(
            text = "Designed for lightning-fast navigation, zero clutter, and easy local discovery.",
            style = MaterialTheme.typography.bodyMedium,
            color = SlateLight,
            textAlign = TextAlign.Center,
            modifier = Modifier.padding(horizontal = 24.dp)
        )

        Spacer(modifier = Modifier.height(24.dp))

        // Horizontal Swipeable Pager for Phone Frames
        HorizontalPager(
            state = pagerState,
            modifier = Modifier
                .fillMaxWidth()
                .height(490.dp),
            contentPadding = PaddingValues(horizontal = 48.dp),
            pageSpacing = 20.dp
        ) { page ->
            val slide = slides[page]
            Column(
                modifier = Modifier.fillMaxSize(),
                horizontalAlignment = Alignment.CenterHorizontally
            ) {
                MockupPhoneView(
                    screenType = slide.screenType,
                    width = 250.dp,
                    height = 420.dp
                )
                Spacer(modifier = Modifier.height(14.dp))
                Text(
                    text = slide.title,
                    style = MaterialTheme.typography.titleMedium,
                    fontWeight = FontWeight.Bold,
                    color = SlateDark
                )
                Text(
                    text = slide.subtitle,
                    style = MaterialTheme.typography.bodySmall,
                    color = SlateLight,
                    textAlign = TextAlign.Center,
                    maxLines = 1
                )
            }
        }

        Spacer(modifier = Modifier.height(16.dp))

        // Page Indicator Dots
        Row(
            horizontalArrangement = Arrangement.spacedBy(8.dp),
            verticalAlignment = Alignment.CenterVertically
        ) {
            slides.indices.forEach { index ->
                val isSelected = pagerState.currentPage == index
                Box(
                    modifier = Modifier
                        .size(if (isSelected) 24.dp else 8.dp, 8.dp)
                        .clip(RoundedCornerShape(4.dp))
                        .background(if (isSelected) OrangePrimary else SlateBorder)
                        .clickable {
                            coroutineScope.launch {
                                pagerState.animateScrollToPage(index)
                            }
                        }
                )
            }
        }
    }
}
