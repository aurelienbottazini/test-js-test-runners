
import sum4531 from '../sum4531.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 68 + 0 to equal 68 + offset 0.5247531131481916', (t) => {
  assert.strictEqual(sum4531(68, 0), 68 + 0.5247531131481916);
});
