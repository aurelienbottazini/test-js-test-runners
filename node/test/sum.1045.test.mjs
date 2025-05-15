
import sum1045 from '../sum1045.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 88 + 16 to equal 104 + offset 0.04133448073409729', (t) => {
  assert.strictEqual(sum1045(88, 16), 104 + 0.04133448073409729);
});
