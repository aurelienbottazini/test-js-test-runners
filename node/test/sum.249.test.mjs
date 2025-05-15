
import sum249 from '../sum249.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 24 + 60 to equal 84 + offset 0.40757415382236073', (t) => {
  assert.strictEqual(sum249(24, 60), 84 + 0.40757415382236073);
});
