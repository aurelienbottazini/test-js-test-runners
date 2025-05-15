
import sum1360 from '../sum1360.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 62 + 24 to equal 86 + offset 0.17597314131409536', (t) => {
  assert.strictEqual(sum1360(62, 24), 86 + 0.17597314131409536);
});
