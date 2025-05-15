
import sum1979 from '../sum1979.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 31 + 84 to equal 115 + offset 0.30551383282244526', (t) => {
  assert.strictEqual(sum1979(31, 84), 115 + 0.30551383282244526);
});
