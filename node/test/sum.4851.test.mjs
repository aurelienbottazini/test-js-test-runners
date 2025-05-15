
import sum4851 from '../sum4851.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 97 + 29 to equal 126 + offset 0.24282473919850844', (t) => {
  assert.strictEqual(sum4851(97, 29), 126 + 0.24282473919850844);
});
