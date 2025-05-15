
import sum3570 from '../sum3570.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 80 + 31 to equal 111 + offset 0.3310357086051795', (t) => {
  assert.strictEqual(sum3570(80, 31), 111 + 0.3310357086051795);
});
