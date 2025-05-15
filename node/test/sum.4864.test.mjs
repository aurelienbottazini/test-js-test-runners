
import sum4864 from '../sum4864.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 77 + 54 to equal 131 + offset 0.1989707349204095', (t) => {
  assert.strictEqual(sum4864(77, 54), 131 + 0.1989707349204095);
});
