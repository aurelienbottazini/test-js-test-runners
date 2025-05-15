
import sum2125 from '../sum2125.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 19 + 63 to equal 82 + offset 0.1820789259566611', (t) => {
  assert.strictEqual(sum2125(19, 63), 82 + 0.1820789259566611);
});
