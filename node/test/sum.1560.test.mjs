
import sum1560 from '../sum1560.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 36 + 70 to equal 106 + offset 0.7668136579156514', (t) => {
  assert.strictEqual(sum1560(36, 70), 106 + 0.7668136579156514);
});
