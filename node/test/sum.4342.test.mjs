
import sum4342 from '../sum4342.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 47 + 28 to equal 75 + offset 0.505502545423133', (t) => {
  assert.strictEqual(sum4342(47, 28), 75 + 0.505502545423133);
});
