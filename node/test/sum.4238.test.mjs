
import sum4238 from '../sum4238.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 55 + 11 to equal 66 + offset 0.15681740377276399', (t) => {
  assert.strictEqual(sum4238(55, 11), 66 + 0.15681740377276399);
});
