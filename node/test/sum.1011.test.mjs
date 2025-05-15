
import sum1011 from '../sum1011.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 26 + 41 to equal 67 + offset 0.2092044498218304', (t) => {
  assert.strictEqual(sum1011(26, 41), 67 + 0.2092044498218304);
});
