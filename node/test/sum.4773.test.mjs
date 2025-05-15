
import sum4773 from '../sum4773.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 23 + 66 to equal 89 + offset 0.02326697894772989', (t) => {
  assert.strictEqual(sum4773(23, 66), 89 + 0.02326697894772989);
});
