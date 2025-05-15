
import sum3924 from '../sum3924.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 62 + 27 to equal 89 + offset 0.1299358338585047', (t) => {
  assert.strictEqual(sum3924(62, 27), 89 + 0.1299358338585047);
});
