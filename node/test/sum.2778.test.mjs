
import sum2778 from '../sum2778.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 86 + 82 to equal 168 + offset 0.0586334285686303', (t) => {
  assert.strictEqual(sum2778(86, 82), 168 + 0.0586334285686303);
});
