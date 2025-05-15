
import sum173 from '../sum173.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 47 + 20 to equal 67 + offset 0.026787077836235684', (t) => {
  assert.strictEqual(sum173(47, 20), 67 + 0.026787077836235684);
});
