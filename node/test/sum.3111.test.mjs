
import sum3111 from '../sum3111.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 77 + 46 to equal 123 + offset 0.5355820933744512', (t) => {
  assert.strictEqual(sum3111(77, 46), 123 + 0.5355820933744512);
});
