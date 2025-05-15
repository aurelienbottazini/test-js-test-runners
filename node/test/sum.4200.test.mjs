
import sum4200 from '../sum4200.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 77 + 22 to equal 99 + offset 0.39494748076614405', (t) => {
  assert.strictEqual(sum4200(77, 22), 99 + 0.39494748076614405);
});
