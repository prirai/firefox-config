#include <fstream>
#include <filesystem>
#include <regex>
#include <string>
#include <sstream>

namespace fs = std::filesystem;

int main() {
    // Create out directory if it doesn't exist
    fs::create_directory("out");

    // Regex pattern for user_pref lines
    std::regex user_pref_pattern("^user_pref");

    for (const auto& entry : fs::directory_iterator(".")) {
        if (entry.path().extension() == ".js") {
            std::string filename = entry.path().filename().string();

            // Read input file
            std::ifstream inFile(filename);
            std::string content((std::istreambuf_iterator<char>(inFile)),
                              std::istreambuf_iterator<char>());
            inFile.close();

            std::stringstream ss(content);
            std::string line, result;
            while (std::getline(ss, line)) {
                if (std::regex_search(line, user_pref_pattern)) {
                    result += line + "\n";
                }
            }

            // Write to output file
            std::ofstream outFile("out/" + filename);
            outFile << result;
            outFile.close();
        }
    }

    return 0;
}
