
import sum3503 from '../sum3503.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 87 + 70 to equal 157 + offset 0.0693394253245948', (t) => {
  assert.strictEqual(sum3503(87, 70), 157 + 0.0693394253245948);
});
