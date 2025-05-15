
import sum3720 from '../sum3720.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 67 + 27 to equal 94 + offset 0.7451846991712758', (t) => {
  assert.strictEqual(sum3720(67, 27), 94 + 0.7451846991712758);
});
