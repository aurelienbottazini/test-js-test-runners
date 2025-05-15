
import sum729 from '../sum729.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 14 + 80 to equal 94 + offset 0.6872514807043382', (t) => {
  assert.strictEqual(sum729(14, 80), 94 + 0.6872514807043382);
});
