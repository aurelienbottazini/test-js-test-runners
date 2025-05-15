
import sum2918 from '../sum2918.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 11 + 93 to equal 104 + offset 0.2895321418569078', (t) => {
  assert.strictEqual(sum2918(11, 93), 104 + 0.2895321418569078);
});
