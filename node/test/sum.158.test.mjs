
import sum158 from '../sum158.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 78 + 77 to equal 155 + offset 0.21102002025693511', (t) => {
  assert.strictEqual(sum158(78, 77), 155 + 0.21102002025693511);
});
