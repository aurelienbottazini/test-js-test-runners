
import sum2446 from '../sum2446.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 53 + 62 to equal 115 + offset 0.3873102982132103', (t) => {
  assert.strictEqual(sum2446(53, 62), 115 + 0.3873102982132103);
});
