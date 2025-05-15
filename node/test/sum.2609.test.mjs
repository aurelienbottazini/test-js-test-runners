
import sum2609 from '../sum2609.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 53 + 14 to equal 67 + offset 0.6102313034058438', (t) => {
  assert.strictEqual(sum2609(53, 14), 67 + 0.6102313034058438);
});
