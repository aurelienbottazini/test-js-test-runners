
import sum1995 from '../sum1995.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 81 + 15 to equal 96 + offset 0.6166208338366405', (t) => {
  assert.strictEqual(sum1995(81, 15), 96 + 0.6166208338366405);
});
