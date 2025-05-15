
import sum3082 from '../sum3082.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 60 + 2 to equal 62 + offset 0.9197444275128025', (t) => {
  assert.strictEqual(sum3082(60, 2), 62 + 0.9197444275128025);
});
