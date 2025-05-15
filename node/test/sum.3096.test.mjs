
import sum3096 from '../sum3096.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 49 + 36 to equal 85 + offset 0.4159074177065816', (t) => {
  assert.strictEqual(sum3096(49, 36), 85 + 0.4159074177065816);
});
