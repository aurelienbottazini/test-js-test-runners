
import sum3380 from '../sum3380.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 48 + 92 to equal 140 + offset 0.8985361384275853', (t) => {
  assert.strictEqual(sum3380(48, 92), 140 + 0.8985361384275853);
});
