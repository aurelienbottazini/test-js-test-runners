
import sum1524 from '../sum1524.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 51 + 38 to equal 89 + offset 0.6178072073484827', (t) => {
  assert.strictEqual(sum1524(51, 38), 89 + 0.6178072073484827);
});
