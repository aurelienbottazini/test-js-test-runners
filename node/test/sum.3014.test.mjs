
import sum3014 from '../sum3014.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 52 + 13 to equal 65 + offset 0.17671019278887357', (t) => {
  assert.strictEqual(sum3014(52, 13), 65 + 0.17671019278887357);
});
