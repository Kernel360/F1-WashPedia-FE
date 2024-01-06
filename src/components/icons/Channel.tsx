import { Colors, colors } from '@styles/colorPalette';

interface ChannelProps {
  size?: number
  color?: Colors
}

function Channel({ size = 24, color = 'black' }: ChannelProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 27 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M23.7655 2.01842L23.766 2.01855C24.5584 2.23066 25.1828 2.85491 25.3949 3.6471C25.6399 4.56402 25.7756 6.05782 25.8451 7.39402C25.8791 8.0472 25.8963 8.63823 25.9049 9.06603C25.9092 9.2797 25.9114 9.4521 25.9125 9.57051C25.9131 9.6297 25.9134 9.67536 25.9135 9.7059L25.9136 9.74016L25.9137 9.7484L25.9137 9.74992V9.75023V9.75028V9.75057L25.9137 9.75211L25.9136 9.76034L25.9135 9.79459C25.9134 9.82512 25.9131 9.87077 25.9126 9.92995C25.9116 10.0483 25.9095 10.2207 25.9052 10.4344C25.8967 10.8621 25.8798 11.4531 25.8459 12.1062C25.7767 13.4424 25.641 14.9357 25.3952 15.852L25.3951 15.8525C25.183 16.6449 24.5585 17.2693 23.7661 17.4814L23.7655 17.4816C23.3546 17.5918 22.5417 17.6913 21.4695 17.7695C20.4254 17.8457 19.2152 17.897 18.06 17.9314C16.9064 17.9657 15.8157 17.9828 15.0128 17.9914C14.6115 17.9957 14.2827 17.9979 14.0544 17.9989C13.9403 17.9995 13.8513 17.9997 13.7911 17.9999L13.7226 18L13.7054 18L13.7012 18H13.7002H13.7L13.6999 19L13.6999 18H13.6997H13.6987L13.6945 18L13.6772 18L13.6088 17.9999C13.5486 17.9997 13.4596 17.9995 13.3455 17.9989C13.1172 17.9979 12.7884 17.9957 12.3871 17.9914C11.5843 17.9828 10.4935 17.9657 9.3399 17.9314C8.1847 17.897 6.97455 17.8457 5.93046 17.7695C4.85822 17.6913 4.04537 17.5918 3.63438 17.4815L3.63385 17.4814C2.84142 17.2693 2.21701 16.6449 2.00487 15.8525L2.00475 15.852C1.75898 14.9357 1.6233 13.4424 1.55405 12.1062C1.5202 11.4531 1.50324 10.8621 1.49476 10.4344C1.49052 10.2207 1.48841 10.0483 1.48736 9.92995C1.48684 9.87077 1.48658 9.82512 1.48645 9.79459L1.48634 9.76034L1.48632 9.75211L1.48632 9.75028L1.48632 9.75008V9.75006V9.74994V9.74992L1.48632 9.74972L1.48632 9.74789L1.48634 9.73966L1.48645 9.70541C1.48658 9.67488 1.48684 9.62923 1.48736 9.57005C1.48841 9.45166 1.49052 9.27928 1.49476 9.06563C1.50324 8.63787 1.5202 8.04691 1.55405 7.39381C1.6233 6.0576 1.75898 4.56436 2.00475 3.64806L2.00487 3.64758C2.21701 2.8551 2.84143 2.23069 3.63389 2.01855L3.63437 2.01843C4.04536 1.90819 4.85821 1.80873 5.93046 1.73046C6.97455 1.65425 8.1847 1.60297 9.33989 1.56863C10.4935 1.53434 11.5842 1.51717 12.3871 1.50858C12.7884 1.50428 13.1172 1.50214 13.3455 1.50107C13.4596 1.50053 13.5486 1.50027 13.6088 1.50013L13.6772 1.50002L13.6945 1.5L13.6987 1.5L13.6997 1.5H13.6999L13.6999 0.5L13.7 1.5H13.7002L13.7012 1.5L13.7054 1.5L13.7226 1.50002L13.7911 1.50013C13.8513 1.50027 13.9403 1.50053 14.0544 1.50107C14.2827 1.50214 14.6115 1.50428 15.0128 1.50858C15.8157 1.51717 16.9064 1.53434 18.06 1.56863C19.2152 1.60297 20.4254 1.65425 21.4695 1.73046C22.5417 1.80873 23.3546 1.90819 23.7655 2.01842Z" stroke={colors[color]} strokeWidth="2" />
      <path d="M11.0549 13.7139L17.9206 9.75024L11.0549 5.78655V13.7139Z" fill={colors[color]} />
    </svg>

  );
}

export default Channel;
