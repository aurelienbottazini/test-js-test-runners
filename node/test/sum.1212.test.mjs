
import sum1212 from '../sum1212.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 70 + 36 to equal 106 + offset 0.26441069543609963', (t) => {
  assert.strictEqual(sum1212(70, 36), 106 + 0.26441069543609963);
});
