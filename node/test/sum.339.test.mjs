
import sum339 from '../sum339.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 97 + 76 to equal 173 + offset 0.14818776998216476', (t) => {
  assert.strictEqual(sum339(97, 76), 173 + 0.14818776998216476);
});
