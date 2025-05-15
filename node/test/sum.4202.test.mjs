
import sum4202 from '../sum4202.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 60 + 89 to equal 149 + offset 0.34757079452548545', (t) => {
  assert.strictEqual(sum4202(60, 89), 149 + 0.34757079452548545);
});
