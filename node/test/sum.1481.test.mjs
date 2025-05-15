
import sum1481 from '../sum1481.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 24 + 58 to equal 82 + offset 0.44635067546062024', (t) => {
  assert.strictEqual(sum1481(24, 58), 82 + 0.44635067546062024);
});
