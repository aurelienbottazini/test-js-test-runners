
import sum1771 from '../sum1771.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 55 + 20 to equal 75 + offset 0.40159903377955175', (t) => {
  assert.strictEqual(sum1771(55, 20), 75 + 0.40159903377955175);
});
