(defproject thi.ng/geom-meshops "0.3.0-SNAPSHOT"
  :description "thi.ng geometry kit - CSG module"
  :url "https://github.com/thi-ng/geom"
  :license {:name "Apache Software License"
            :url "http://www.apache.org/licenses/LICENSE-2.0"}
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [thi.ng/geom-core "0.3.0-SNAPSHOT"]
                 [thi.ng/geom-types "0.3.0-SNAPSHOT"]]

  :source-paths ["src/cljx"]
  :test-paths ["target/test-classes"]

  :profiles {:dev {:dependencies [[org.clojure/clojurescript "0.0-2202"]
                                  [criterium "0.4.3"]]
                   :plugins [[com.keminglabs/cljx "0.3.2"]
                             [lein-cljsbuild "1.0.3"]
                             [com.cemerick/clojurescript.test "0.2.2"]
                             [com.cemerick/austin "0.1.4"]]
                   :hooks [cljx.hooks]
                   :aliases {"cleantest" ["do" "clean," "test," "cljsbuild" "test"]}}}

  :cljx {:builds [{:source-paths ["src/cljx"]
                   :output-path "target/classes"
                   :rules :clj}
                  {:source-paths ["src/cljx"]
                   :output-path "target/classes"
                   :rules :cljs}
                  {:source-paths ["test/cljx"]
                   :output-path "target/test-classes"
                   :rules :clj}
                  {:source-paths ["test/cljx"]
                   :output-path "target/test-classes"
                   :rules :cljs}]}

  :cljsbuild {:builds [{:source-paths ["target/classes" "target/test-classes"]
                        :id "simple"
                        :compiler {:output-to "target/geom-meshops-0.3.0-SNAPSHOT.js"
                                   :optimizations :whitespace
                                   :pretty-print true}}]
              :test-commands {"unit-tests" ["phantomjs" :runner "target/geom-meshops-0.3.0-SNAPSHOT.js"]}}

  :pom-addition [:developers [:developer
                              [:name "Karsten Schmidt"]
                              [:url "http://postspectacular.com"]
                              [:timezone "0"]]])
