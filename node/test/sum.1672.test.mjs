
import sum1672 from '../sum1672.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 63 + 69 to equal 132 + offset 0.3349081595901364', (t) => {
  assert.strictEqual(sum1672(63, 69), 132 + 0.3349081595901364);
});
