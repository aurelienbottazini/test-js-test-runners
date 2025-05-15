
import sum3711 from '../sum3711.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 9 + 20 to equal 29 + offset 0.005261679442027378', (t) => {
  assert.strictEqual(sum3711(9, 20), 29 + 0.005261679442027378);
});
