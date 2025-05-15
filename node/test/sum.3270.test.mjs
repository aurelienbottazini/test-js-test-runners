
import sum3270 from '../sum3270.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 60 + 97 to equal 157 + offset 0.20068959227044592', (t) => {
  assert.strictEqual(sum3270(60, 97), 157 + 0.20068959227044592);
});
