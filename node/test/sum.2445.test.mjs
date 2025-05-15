
import sum2445 from '../sum2445.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 31 + 10 to equal 41 + offset 0.8350742596440611', (t) => {
  assert.strictEqual(sum2445(31, 10), 41 + 0.8350742596440611);
});
