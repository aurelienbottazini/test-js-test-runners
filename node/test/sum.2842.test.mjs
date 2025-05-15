
import sum2842 from '../sum2842.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 31 + 13 to equal 44 + offset 0.6184974203321016', (t) => {
  assert.strictEqual(sum2842(31, 13), 44 + 0.6184974203321016);
});
